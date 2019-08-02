#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub isInformationConsistent {
    my ($evidences) = @_;

    my $rows = @$evidences;
    my $cols = @{@$evidences[0]};

    for (my $col = 0; $cols > $col; ++$col) {
        my $c = 0;
        for (my $row = 0; $rows > $row; ++$row) {
            if (!@{@$evidences[$row]}[$col]) {
                next;
            } elsif (1 == @{@$evidences[$row]}[$col]) {
                if (!$c) {
                    $c = 1;
                } elsif (-1 == $c) {
                    return 0;
                }
            } else {
                if (!$c) {
                    $c = -1;
                } elsif (1 == $c) {
                    return 0;
                }
            }
        }
    }

    return 1;
}

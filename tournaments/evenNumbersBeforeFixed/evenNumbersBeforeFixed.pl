#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub evenNumbersBeforeFixed {
    my ($sequence, $fixedElement) = @_;

    my $result = 0;

    for (my $i = 0; @$sequence > $i; ++$i) {
        if (!($$sequence[$i] & 1) && $$sequence[$i] != $fixedElement) {
            ++$result;
        }

        if ($$sequence[$i] == $fixedElement) {
            return $result;
        }
    }

    return -1;
}

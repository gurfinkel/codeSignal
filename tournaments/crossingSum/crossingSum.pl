#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub crossingSum {
    my ($matrix, $a, $b) = @_;

    my $result = -@{@$matrix[$a]}[$b];

    for (my $i = 0; @$matrix[$i]; ++$i) {
        $result += @{@$matrix[$i]}[$b];
    }

    for (my $i = 0; @{@$matrix[0]}[$i]; ++$i) {
        $result += @{@$matrix[$a]}[$i];
    }

    return $result;
}

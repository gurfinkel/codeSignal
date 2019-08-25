#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub arrayMaximalAdjacentDifference {
    my ($inputArray) = @_;

    use List::Util qw(max);

    my $result = 0;

    for (my $i = 1; @$inputArray > $i; ++$i) {
        $result = max($result, abs($$inputArray[$i] - $$inputArray[$i - 1]));
    }

    return $result;
}
